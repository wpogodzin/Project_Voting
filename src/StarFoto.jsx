
  /* module Foto (of the star)
  */ 
  const star_array = [
    {
    name: 'Maradona',
    imageUrl: 'https://media.gettyimages.com/id/1363115696/photo/argentina-captain-diego-maradona-holds-aloft-the-trophy-after-the-fifa-1986-world-cup-final.jpg?s=612x612&w=0&k=20&c=N6BIF3hmsAHPqSUKYH8S3RjPjYTeMbjbvuHujT88axQ=',
    imageSize: 190
    },
      {
      name: 'Messi',
      imageUrl: 'https://pbs.twimg.com/media/FkR-TZAXwAApp1C.jpg:large',
      imageSize: 190
      },
    {
    name: 'Pele',
    imageUrl: 'https://media.gettyimages.com/id/96522194/photo/brazilian-football-star-pele-kisses-the-fifa-world-cup-during-its-presentation-in-rio-de.jpg?s=612x612&w=gi&k=20&c=V7GWHDk2HzAHXurQo4l0icEpJtljkDiK1iTridpzxAI=',
    imageSize: 190
    },
      {
      name: 'Ronaldo',
      imageUrl: 'https://c8.alamy.com/comp/HE62J7/yokohama-18th-dec-2016-real-madrid-forward-cristiano-ronaldo-kisses-HE62J7.jpg',
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
 