import { useState } from "react";
import type { MemoFormProps } from "../types";

// function MemoForm({ onAddMemo }: MemoFormProps) {
function MemoForm({ onAddMemo }: MemoFormProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedValue = inputValue.trim();
        if (!trimmedValue) {
            return;
        }
        onAddMemo(trimmedValue);
        setInputValue("");
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <form className="memo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="memo-input"
                placeholder="메모를 입력하세요..."
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit" className="add-button">
                추가
            </button>
        </form>
    );
}

export default MemoForm;
