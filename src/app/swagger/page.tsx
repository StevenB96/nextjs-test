// src/app/api/docs/page.tsx

"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function ApiDocsPage() {
    const url = "api/swagger";

    return (
        <div>
            <SwaggerUI
                url={url}
            />
        </div>
    );
}
