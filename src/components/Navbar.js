export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="sits-title"> Logo</a>
        <ul>
            <li>
                <a href="/kids"> Kids</a>
            </li>

            <li>
                <a href="/sale"> Sale</a>
            </li>

            <li>
                <a href="/women"> Women</a>
            </li>

            <li>
                <a href="/men"> Men</a>
            </li>

        </ul>
    </nav>
}




