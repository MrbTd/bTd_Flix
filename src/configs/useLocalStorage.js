import { useState, useEffect } from "react";

export function getStorageValue() {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
}

export const useLocalStorage = (data) => {

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(data));
    }, [data]);
};