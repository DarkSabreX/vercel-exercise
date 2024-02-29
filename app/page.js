import { Card } from "primereact/card";
import Link from "next/link";

export default function Home() {
  const links = [
    { title: "Question 1", href: "/question/1" },
    { title: "Question 2", href: "/question/2" },
    { title: "Question 3", href: "/question/3" },
    { title: "Question 4", href: "/question/4" },
    { title: "Question 5", href: "/question/5" },
    { title: "Question 6", href: "/question/6" },
    { title: "Question 7", href: "/question/7" },
  ];
  return (
    <div className="grid">
      <div className="col-12">
        <div className=" border-bottom-1">
          <p className="text-6xl pl-4 ">Remy Z Romano</p>
        </div>
      </div>
      <div className="col-12 flex w-full">
        <p className="text-5xl w-10 pl-4">
          Senior Customer Success Engineer Exercise
        </p>
      </div>
      <div className="col-12 grid pt-8 pl-4">
        {links.map((link, id) => (
          <div
            key={id}
            className={
              id >= 4
                ? "col-4 flex justify-content-center"
                : "col-3 flex justify-content-center"
            }
          >
            <Link href={link.href}>
              <Card
                className="p-5"
                style={{ background: "var(--surface-200)" }}
                title={link.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
