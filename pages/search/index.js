import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Result from "../../components/Search/Result";
import SearchBar from "../../components/Search/SearchBar";
import { products } from "../../components/Product/ProductData.json";
import ProductCard from "../../components/Product/ProductCard";
import ProductModal from "../../components/Product/ProductModal";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProducts = products.filter((product) =>
    product.features.some((feature) =>
      feature.toLowerCase().includes(query?.toLowerCase() || "")
    )
  );

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    setOpen(true);
  };
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

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleNavigation = (product) => {
    console.log("Navigating to product:", product?.id);
    router.push(`/product/${product.id}`);
  };

  const handleThumbnailClick = (index) => setActiveImageIndex(index);

  return (
    <Box sx={{ p: 3 }}>
      <Result resultSearch={query} />
      {filteredProducts.length > 0 ? (
        <Grid container spacing={3} sx={{ mt: '8%' }}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: '-webkit-center' }} key={product.id}>
              <ProductCard
                product={product}
                onClick={() => handleOpenModal(product)}
                handleNavigation={() => handleNavigation(product)}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <SearchBar />
      )}
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
    </Box>
  );
};

export default Search;
