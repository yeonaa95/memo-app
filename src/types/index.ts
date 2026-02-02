export interface Memo {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface MemoInput {
    content: string;
}

export interface MemoFormProps {
    onAddMemo: (content: string) => void;
}

export interface MemoItemProps {
    memo: Memo;
    onUpdateMemo: (id: number, content: string) => void;
    onDeleteMemo: (id: number) => void;
}

export interface MemoListProps {
    memos: Memo[];
    onUpdateMemo: (id: number, content: string) => void;
    onDeleteMemo: (id: number) => void;
}
