const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, 'src', 'pages', 'api', 'PlayersStats', 'top');

fs.readdirSync(apiDir).forEach(file => {
  if (file.endsWith('.ts')) {
    const filePath = path.join(apiDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace string teams with objects including logos, and add player.imageSrc
    content = content.replace(/team: "([A-Z]+)"/g, 'team: { name: "$1", logoSrc: "/main/rm.png" }, player: { name: "$2", id: $3, imageSrc: "/main/m.png" }'); 
    // wait, I can just replace the team string and inject imageSrc directly into the player object or next to team.
    // Let's do a simpler regex replace:
    // { player: { name: "Alisson Becker", id: 6 }, stat: 12, team: "LIV" }
    
    content = content.replace(/player: { name: "([^"]+)", id: (\d+) }, stat: (\d+), team: "([^"]+)"/g, 'player: { name: "$1", id: $2, team: { name: "$4", logoSrc: "/main/rm.png" }, imageSrc: "/main/m.png" }, stat: $3');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
