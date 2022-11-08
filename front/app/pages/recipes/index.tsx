import React, { FC } from "react";
import { GetStaticProps } from "next";

type Recipe = {
  id: number;
  title: string;
  url: string;
  food_image_url: string;
  material: string;
  cost: string;
  indication: string;
}

type Props = {
  recipes: Recipe[];
}

const Home: FC<Props> = (props) => {
  return (
	<div>
    <h2>Recipeの一覧</h2>
    <table className="dataframe table table-bordered table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>recipeTitle</th>
          <th>recipeIndication</th>
          <th>recipeCost</th>
          <th>recipeMaterial</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {props.recipes.map((recipe) =>
        <tr>
          <td>{recipe.id}.</td>
          <td>{recipe.title}</td>
          <td>{recipe.indication}</td>
          <td>{recipe.cost}</td>
          <td>{recipe.material.replace(/"|\]|\[/g,'')}</td>
          <td><img src={recipe.food_image_url} alt="food_img" style={{height: '120px'}}/>
          <br /><a href={recipe.url}>つくる</a></td>
        </tr>
        )}
      </tbody>
    </table>
	</div>
  )
}

export const getServerSideProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/recipes", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      recipes: json
    },
  };
}

export default Home;