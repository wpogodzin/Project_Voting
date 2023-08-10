const user = {
    names: 'Maradona  Messi  Pele  Ronaldo',
    imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/877/133/desktop-wallpaper-maradona-pele-messi-or-ronaldo-just-who-is-football-s-greatest-player-messi-and-maradona.jpg',
    /*1 only imageSize was decreased from 900 to 200 1*/
    imageSize: 200

  };
    export default function Profile() {
    return (
      <>
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
  