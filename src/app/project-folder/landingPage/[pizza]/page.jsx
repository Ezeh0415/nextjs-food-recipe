import fetchPizza from "@/app/_api/pizza";


export async function generateMetadata({params}) {
    const PizzaRecipe = await fetchPizza(params.id)
    return {
      title: `${PizzaRecipe.publisher} | Next App`,
      description: `This is the page of ${PizzaRecipe.title} `,
    };
  }

const pizza = async ({params}) => {
    const PizzaRecipe = await fetchPizza(params.id)
  return (
     <main>
        <div>
            <h1>{PizzaRecipe.title}</h1>
        </div>
     </main>
  );
};
export default pizza;