const user = {
    name: 'Maradona',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/164px-Maradona-Mundial_86_con_la_copa.JPG',
    /*1 only imageSize was decreased from 900 to 200 1*/
    imageSize: 200

  };
    export default function Profile() {
    return (
      <>
        <img
          className="avatar"
          src={user.imageUrl}  
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
    }
    