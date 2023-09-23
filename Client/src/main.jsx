import React from "react";
import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const module = () => {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       </QueryClientProvider>   
    </React.StrictMode>
);
