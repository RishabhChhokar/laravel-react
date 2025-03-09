interface HeadProps {
    title: string;
    isSortable: boolean;
}

interface TableProps {
    head: Array<HeadProps>;
    data: Array<any>;
    generateRows: (row: any) => Array<any>;
}

export { TableProps };
