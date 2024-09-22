window.onload = function () {
    let appHeader = `
<header>
    <ul class="menu_ul">
        <li class="menu_tag_li">
            <a class="menu_tag" href="Home.html">ArcadeHall</a> 
        </li>
        <li class="menu_li">
            <a href="FolderStructure.html">Folder Structure</a>
        </li>
        <li class="menu_li">
            <a href="License.html">License</a>
        </li>
        <li class="menu_li">
            <a href="Issues.html">Issues</a>
        </li>
        <li class="menu_li">
            <a href="Contact.html">Contact</a>
        </li>
        <li class="menu_li">
            <a href="Assets.html">Assets</a>
        </li>
    </ul>
</header>
`;

    let appFooter = `    
<footer class="_footer">
    <p>ArcadeHall</p>
    <p>arcadehallgames@gmail.com</p>
    <p><a href="mailto:arcadehallgames@gmail.com">arcadehallgames@gmail.com</a></p>
</footer>
`;

    document.getElementById("app-header").innerHTML = appHeader;
    document.getElementById("app-footer").innerHTML = appFooter;
}