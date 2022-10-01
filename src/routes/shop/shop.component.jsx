import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../redux/store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-perview/categories-preview.comonent';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();
  const categoryMap = async () => {
    const categorydata = await getCategoriesAndDocuments('categories');
    dispatch(setCategoriesMap(categorydata));
  };

  useEffect(() => {
    categoryMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
