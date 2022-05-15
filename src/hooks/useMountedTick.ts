import {useEffect, useState} from "react";

export function useMountedTick() {
    let [mountedTick, setMountedTick] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMountedTick(true);
        })
    }, [mountedTick])

    return mountedTick;
}