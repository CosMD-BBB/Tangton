"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { rootMargin: "0px 0px -8%", threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => { observer.disconnect(); document.documentElement.classList.remove("reveal-ready"); };
  }, []);
  return null;
}
