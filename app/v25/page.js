"use client";

import React from "react";
import Head from "next/head";

import { API } from "@stoplight/elements";
import "@stoplight/elements/styles.min.css";

export default function Page() {
  return (
    <>
      <Head>
        <title>v2.5 Docs</title>
      </Head>
      <div>
        <API apiDescriptionUrl="https://raw.githubusercontent.com/devishke-orange/ohrm-openapi-json/main/openapi-31-edited.json" />
      </div>
    </>
  );
}
