export const getMonth = (ymd: string) => {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format((new Date(ymd)));
};

export const getDate = (ymd: string) => {
    return (new Date(ymd)).getDate();
};

export const getYear = (ymd: string) => {
    return (new Date(ymd)).getFullYear();
};

export const getDay = (ymd: string) => {
    return (new Date(ymd)).getDay();
};