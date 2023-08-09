const user = {
    names: 'Maradona  Messi  Pele  Ronaldo',
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/877/133/desktop-wallpaper-maradona-pele-messi-or-ronaldo-just-who-is-football-s-greatest-player-messi-and-maradona.jpg',
    imageSize: 600
  };
    export default function Profile() {
    return (
      <>
        <h1>Who is the best football player?</h1>
        <h1>{user.names}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.names}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  