import { useState } from "react";
import type { MemoItemProps } from "../types";

// function MemoItem({ memo, onUpdateMemo, onDeleteMemo }: MemoItemProps) {
function MemoItem({ memo, onUpdateMemo, onDeleteMemo }: MemoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(memo.content);

    const handleEdit = () => {
        console.log("수정:", memo.id);
        setIsEditing(true);
    };

    const handleDelete = () => {
        if (window.confirm("정말로 이 메모를 삭제하시겠습니까?")) {
            onDeleteMemo(memo.id);
        }
    };

    const handleSave = () => {
        const trimmedContent = editContent.trim();
        if (trimmedContent === "") {
            alert("내용을 입력해주세요.");
            return;
        }
        console.log("저장:", memo.id);
        onUpdateMemo(memo.id, trimmedContent);
        setIsEditing(false);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditContent(e.target.value);
    };

    const handleCancel = () => {
        console.log("취소:", memo.id);
    };

    if (isEditing) {
        return (
            <div className="memo-item">
                <textarea
                    className="edit-input"
                    value={editContent}
                    onChange={handleContentChange}
                    autoFocus
                />
                {/* <p className="memo-content">{memo.content}</p> */}
                <p className="memo-date">enter 저장, ESC 취소</p>
                <div className="memo-actions">
                    <button className="save-button" onClick={handleSave}>
                        저장
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                        취소
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="memo-item">
            <p className="memo-content">{memo.content}</p>
            <p className="memo-date">
                {new Date(memo.createdAt).toLocaleString("ko-KR")}
            </p>
            <div className="memo-actions">
                <button className="edit-button" onClick={handleEdit}>
                    수정
                </button>
                <button className="delete-button" onClick={handleDelete}>
                    삭제
                </button>
            </div>
        </div>
    );
}

export default MemoItem;
