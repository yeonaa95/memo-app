import type { MemoListProps } from "../types";
import MemoItem from "./MemoItem";

function MemoList({ memos, onUpdateMemo, onDeleteMemo }: MemoListProps) {
    // 조건에 따른 렌더링
    if (memos.length === 0) {
        return (
            <div className="memo-list">
                작성된 메모가 없습니다. 첫 번째 메모를 작성해보세요!
            </div>
        );
    }

    return (
        <div className="memo-list">
            {memos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    memo={memo}
                    onUpdateMemo={onUpdateMemo}
                    onDeleteMemo={onDeleteMemo}
                />
            ))}
        </div>
    );
}

export default MemoList;
