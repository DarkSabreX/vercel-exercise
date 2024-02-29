"use client";

import content from "../../_data/content";

export default function Page({ params }) {
  return (
    <div>
      <div className="text-2xl mb-4">Question {params.slug}</div>
      <div className="font-bold">Q:</div>
      {content[params.slug - 1].question}
      <div className="font-bold">A:</div>
      {content[params.slug - 1].answer}
    </div>
  );
}
