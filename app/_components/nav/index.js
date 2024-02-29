"use client";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";

export default function Nav() {
  const items = [
    {
      label: "Question 1",
      template: () => (
        <Link href="/question/1">
          <span className="text-primary font-semibold">Question 1</span>
        </Link>
      ),
    },
    {
      label: "Question 2",
      template: () => (
        <Link href="/question/2">
          <span className="text-primary font-semibold">Question 2</span>
        </Link>
      ),
    },
    {
      label: "Question 3",
      template: () => (
        <Link href="/question/3">
          <span className="text-primary font-semibold">Question 3</span>
        </Link>
      ),
    },
    {
      label: "Question 4",
      template: () => (
        <Link href="/question/4">
          <span className="text-primary font-semibold">Question 4</span>
        </Link>
      ),
    },
    {
      label: "Question 5",
      template: () => (
        <Link href="/question/5">
          <span className="text-primary font-semibold">Question 5</span>
        </Link>
      ),
    },
    {
      label: "Question 6",
      template: () => (
        <Link href="/question/6">
          <span className="text-primary font-semibold">Question 6</span>
        </Link>
      ),
    },
    {
      label: "Question 7",
      template: () => (
        <Link href="/question/7">
          <span className="text-primary font-semibold">Question 7</span>
        </Link>
      ),
    },
  ];

  const home = { icon: "pi pi-home", url: "/" };
  return <BreadCrumb model={items} home={home} />;
}
