import MemoForm from "./components/MemoForm";
import MemoList from "./components/MemoList";
import type { Memo } from "./types";
import "./styles/App.css";
import { useState, useEffect } from "react";

const MEMO_STORAGE_KEY = import.meta.env.VITE_MEMO_STORAGE_KEY;

function App() {
    const [memos, setMemos] = useState<Memo[]>(() => {
        const savedMemos = localStorage.getItem(MEMO_STORAGE_KEY);
        return savedMemos ? JSON.parse(savedMemos) : [];
    });

    useEffect(() => {
        localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memos));
    }, [memos]);

    const handleAddMemo = (content: string) => {
        console.log("추가:", content);

        const newMemo: Memo = {
            id: Date.now(),
            content,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        setMemos([newMemo, ...memos]);
    };

    const handleUpdateMemo = (id: number, content: string) => {
        setMemos(
            memos.map((memo) =>
                memo.id === id
                    ? {
                          ...memo,
                          content: content,
                          updatedAt: new Date().toISOString(),
                      }
                    : memo,
            ),
        );
    };

    const handleDeleteMemo = (id: number) => {
        setMemos(memos.filter((memo) => memo.id !== id));
    };

    return (
        <div className="app">
            <h1>📝 {import.meta.env.VITE_APP_TITLE}</h1>

            <MemoForm onAddMemo={handleAddMemo} />

            <MemoList
                memos={memos}
                onUpdateMemo={handleUpdateMemo}
                onDeleteMemo={handleDeleteMemo}
            />

            <p className="memo-count">총 {memos.length}개의 메모</p>
        </div>
    );
}

export default App;
