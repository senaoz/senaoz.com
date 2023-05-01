import React from "react";
import { data } from "@/app/layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="title">Hey 👋 I’m Sena Oz. </h1>
      <p>
        I am a management information systems student trying to be a software
        developer. Live in İstanbul. Student at{" "}
        <a href="https://www.boun.edu.tr/" target="_blank">
          Boğaziçi University.
        </a>
      </p>
    </>
  );
}
