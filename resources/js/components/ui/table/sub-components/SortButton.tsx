const SortButton: React.FC<{
    currentSortOrder: string;
    currentCategory: string;
    toggleSortOrder: (
        currentSortOrder: string,
        currentCategory: string
    ) => void;
    children: React.ReactNode;
}> = ({ currentSortOrder, currentCategory, toggleSortOrder, children }) => {
    return (
        <button
            onClick={() => toggleSortOrder(currentSortOrder, currentCategory)}
            title="Sort"
            type="button"
            className="cursor-pointer"
        >
            {children}
        </button>
    );
};

export default SortButton;
