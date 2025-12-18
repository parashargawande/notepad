import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { ref, onValue, set } from "firebase/database";

export default function NotePage() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const noteRef = ref(db, `notes/${id}`);

    const unsubscribe = onValue(noteRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data.text === "string") {
        setText(data.text);
      } else {
        setText("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const noteRef = ref(db, `notes/${id}`);

    const timeout = setTimeout(async () => {
      setSaving(true);
      await set(noteRef, { text });
      setSaving(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [id, text]);

  if (loading) {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.title}>Simple Notepad</div>
          <div style={styles.status}>Loading...</div>
        </header>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.title}>Simple Notepad</div>
        <div style={styles.status}>{saving ? "Saving..." : "Saved"}</div>
        <div style={styles.link}>
          Share this URL: <code>{window.location.href}</code>
        </div>
      </header>
      <textarea
        style={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your notes here..."
      />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    boxSizing: "border-box"
  },
  header: {
    marginBottom: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  title: {
    fontSize: "18px",
    fontWeight: 600
  },
  status: {
    fontSize: "12px",
    color: "#9ca3af"
  },
  link: {
    fontSize: "12px",
    color: "#9ca3af",
    wordBreak: "break-all"
  },
  textarea: {
    flex: 1,
    width: "100%",
    marginTop: "8px",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    borderRadius: "8px",
    border: "1px solid #1f2937",
    padding: "12px",
    fontSize: "14px",
    fontFamily: "Consolas, Monaco, 'Courier New', monospace",
    resize: "none",
    outline: "none"
  }
};


