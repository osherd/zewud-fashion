import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../redux/store/categories/category.selector';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className='categories-preview-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
