import "./Layout.css"
import NavBar from "../navbar/NavBar";

export default function Layout({children}) {

    return (
        <>
            <NavBar />
            <div className="layout-root">
                {children}
            </div>
        </>
    );
}