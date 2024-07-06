export default function AnimalCard({name,scientificName,size,diet}){
    // const {name} = props;
    return(
        // <h1>Animal Card</h1>
        <div>
        <h1>{name}</h1>
        <h2>{scientificName}</h2>
        <h3>{size}</h3>
        <h4>{diet.join(',')}</h4>
        </div>
    );
}