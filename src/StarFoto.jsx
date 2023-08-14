
  /* module Foto (of the star)
  */ 
  const star_array = [
    {
    name: 'Maradona',
    imageUrl: '/src/components/maradona.jpeg',
    imageSize: 190
    },
      {
      name: 'Messi',
      imageUrl: 'src/components/messi.jpeg',
      imageSize: 190
      },
    {
    name: 'Pele',
    imageUrl: 'src/components/pele.jpg',
    imageSize: 190 
    },
      {
      name: 'Ronaldo',
      imageUrl: 'src/components/ronaldo.jpg',
      imageSize: 190       
      }
  ];

  /* calling function: attention (without name may be) 
  */
  export default function ({star_index}) {
    return (
      <>
        <img
          className="avatar"
          src={star_array[star_index].imageUrl}  
          alt={'Photo of ' + star_array[star_index].name}
          style={{
            width: star_array[star_index].imageSize,
            height: star_array[star_index].imageSize
          }}
        />
        <h1></h1> {/*  for vertical distance between containers */}
      </>
    );
  }
    