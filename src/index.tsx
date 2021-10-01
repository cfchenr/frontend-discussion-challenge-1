import { render } from "react-dom";
import createServer from "./server.js";
import Home from "./pages/Home";
import GlobalStytes from "./styles/GlobalStyles"

const NUMBER_OF_POSTS = 100;
const PAGE_SIZE = 20;

createServer(NUMBER_OF_POSTS, PAGE_SIZE);

const rootElement = document.getElementById("root");
render(<><Home /><GlobalStytes/></>, rootElement);
    