import {useEffect, useState} from "react";
import SmoothScroll from "smooth-scroll";

export function useSmoothScroll() {

    const [smoothScroll, setSmoothScroll] = useState<SmoothScroll|null>(null)

    useEffect(() => {
       const SmoothScroll =  require('smooth-scroll');
       setSmoothScroll(new SmoothScroll())
    },[])

    return smoothScroll;
}