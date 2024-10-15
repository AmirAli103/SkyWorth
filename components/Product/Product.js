import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';
import TVImage from './../../assets/perfect-match.jpg';
import BackgroundImageComponent from './BackgroundImageComponent';
import Breadcrumb from '../BreadCrumb';
import ProductCard from './ProductCard';
import { products } from './ProductData.json';
import ProductModal from './ProductModal';
import FilterSection from './FilterSection';
import PaginationComponent from './PaginationComponent';
import { useRouter } from 'next/router';

const ProductGrid = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const productsPerPage = 18;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    resolution: [],
    productSize: [],
    feature: [],
  });

  const filteredProducts = products.filter((product) => {
    const matchesResolution = selectedFilters.resolution.length === 0 ||
      selectedFilters.resolution.includes(product.resolution);

    const matchesProductSize = selectedFilters.productSize.length === 0 ||
      selectedFilters.productSize.includes(product.productSize);

      const matchesFeature = selectedFilters.feature.length === 0 ||
      selectedFilters.feature.every((feature) => product.features.includes(feature));

    return matchesResolution && matchesProductSize && matchesFeature;
  });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleChangePage = (event, value) => setPage(value);
  
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    setOpen(true);
  };

  const handleThumbnailClick = (index) => setActiveImageIndex(index);
  
  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === selectedProduct.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNavigation = (product) => {
    console.log("Navigating to product:", product?.id);
    router.push(`/product/${product.id}`);
  };

  return (
    <Container maxWidth="xl">
      <Breadcrumb paddingTop={{ xs: '22%', sm: '18%', md: '10%', lg: '5%', xl: '2%' }} />
      <BackgroundImageComponent
        src={TVImage}
        title="Discover the Perfect Match!"
        desc="Shop by size, clarity, contrast, and more when selecting the technology and TV that makes your space complete."
      />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3} marginBottom={{xs:"30px",md:"100px"}}>
          <FilterSection onFilterChange={setSelectedFilters} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} sx={{textAlign:'-webkit-center'}} key={product.id}>
                <ProductCard
                  product={product}
                  onClick={() => handleOpenModal(product)}
                  handleNavigation={() => handleNavigation(product)}
                />
              </Grid>
            ))}
          </Grid>
        {filteredProducts.length>0&&  <PaginationComponent
            page={page}
            onPageChange={handleChangePage}
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
          />}
        </Grid>
      </Grid>
      {selectedProduct && (
        <ProductModal
          open={open}
          onClose={handleCloseModal}
          selectedProduct={selectedProduct}
          activeImageIndex={activeImageIndex}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
          handleThumbnailClick={handleThumbnailClick}
        />
      )}
    </Container>
  );
};

export default ProductGrid;
