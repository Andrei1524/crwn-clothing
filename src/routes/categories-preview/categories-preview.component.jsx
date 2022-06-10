import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Fragment key={title}>
            <CategoryPreview products={products} title={title} />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
