import { Grid, Box, Button, Typography, CircularProgress, } from "@mui/material";
import { useForm } from "react-hook-form";
import TextInput from "./../../components/Warrenty/TextInput";
import SelectInput from "./../../components/Warrenty/SelectInput";
import RadioGroupInput from "./../../components/Warrenty/RadioGroupInput";
import CheckboxGroup from "./../../components/Warrenty/CheckBoxGroup";
import FileUpload from "./../../components/Warrenty/FileUpload";
import { motion } from "framer-motion";
import WarrantyCards from "../../components/Warrenty/WarrentyBottomCard";
import BackgrondImages from "./../../assets/select.jpg";
import HomePage1 from "./../../assets/homePage1.jpg";
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import data from './data.json';
const Index = () => {
  const { resolution, productSize, brandOptions } = data;
  const countryDetails = {
    capital: "Islamabad",
    currency: "PKR",
    currency_name: "Pakistani rupee",
    currency_symbol: "₨",
    emoji: "🇵🇰",
    id: 167,
    iso2: "PK",
    iso3: "PAK",
    latitude: "30.00000000",
    longitude: "70.00000000",
    name: "Pakistan",
    native: "Pakistan",
    numeric_code: "586",
    phone_code: 92,
    region: "Asia",
    subregion: "Southern Asia",
    tld: ".pk"
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      country: countryDetails.name
    }
  });
  const [TermandCondition, setTermandCondition] = useState(true);
  const [loading, setLoading] = useState(false);
  const [countryid, setCountryid] = useState(167);
  const [stateid, setstateid] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      if (url.includes('#form')) {
        const warrantyForm = document.getElementById('form');
        if (warrantyForm) {
          warrantyForm.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    if (router.asPath.includes('#form')) {
      const warrantyForm = document.getElementById('form');
      if (warrantyForm) {
        warrantyForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  const handleLearnMore = () => {
    router.push("/product");
  };
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await fetch("/api/send-warranty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        reset();
        window.location.reload();
      } else {
        const error = await response.json();
        alert(error.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
    finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (name) => (event) => {
    const file = event;
    if (file) {
      setValue(name, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        console.log(base64String);
        setValue(name, base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const fullName = watch("fullName");
  const phone = watch("phone");
  const cnicNumber = watch("cnicNumber");
  const email = watch("email");
  const purchaseDate = watch("purchaseDate");
  const addressLine1 = watch("addressLine1");
  const city = watch("city");
  const state = watch("state");
  const country = watch("country");
  const gender = watch("gender");
  const brandSource = watch("brandSource");
  const productModel = watch("productModel");
  const serialNumber = watch("serialNumber");
  const promotionalMaterials = watch("promotionalMaterials");
  const area = watch("area");
  const type = watch("type");
  const size = watch("size");
  const shop = watch("shop")

  const isFormComplete =
    fullName &&
    phone &&
    cnicNumber &&
    email &&
    purchaseDate &&
    addressLine1 &&
    city &&
    country &&
    gender &&
    brandSource &&
    productModel &&
    serialNumber &&
    state &&
    area &&
    type &&
    size &&
    shop &&
    promotionalMaterials;
  return (
    <Box sx={{ marginTop: { xs: "70px", md: "0px" } }}>
      <Image
        src={HomePage1}
        alt="Centered"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{ padding: { xs: "10px 20px", md: "20px" }, maxWidth: "1000px", margin: "0 auto", borderRadius: "8px" }}
        id={"form"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} component={motion.div} transition={{ delay: 0.3 }} variants={animationVariants}>
              <h1 style={{ fontFamily: "Kanit", fontWeight: "500", textAlign: "center", }}>
                Warranty Registration Form
              </h1>
            </Grid>

            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Full name as per CNIC"
                {...register("fullName", { required: "Full name is required" })}
                value={fullName}
                onChange={(e) => setValue("fullName", e.target.value)}
              />
              {errors.fullName && (<Typography color="error">{errors.fullName.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Mobile Number"
                {...register("phone", { required: "Phone is required" })}
                value={phone}
                onChange={(e) => setValue("phone", e.target.value)}
              />
              {errors.phone && (
                <Typography color="error">{errors.phone.message}</Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="CNIC Number"
                {...register("cnicNumber", { required: "CNIC Number is required" })}
                value={cnicNumber}
                onChange={(e) => setValue("cnicNumber", e.target.value)}
              />
              {errors.cnicNumber && (<Typography color="error">{errors.cnicNumber.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Email address"
                type="email"
                {...register("email", { required: "Email is required" })}
                value={email}
                onChange={(e) => setValue("email", e.target.value)}
              />
              {errors.email && (
                <Typography color="error">{errors.email.message}</Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Purchase date"
                type="date"
                {...register("purchaseDate", {
                  required: "Purchase date is required",
                })}
                value={purchaseDate}
                onChange={(e) => setValue("purchaseDate", e.target.value)}
              />
              {errors.purchaseDate && (<Typography color="error">{errors.purchaseDate.message}</Typography>)}
            </Grid>

            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Typography fontSize={18} sx={{ fontFamily: "Kanit", fontWeight: "500" }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Address"
                {...register("addressLine1", {
                  required: "Address Line 1 is required",
                })}
                value={addressLine1}
                onChange={(e) => setValue("addressLine1", e.target.value)}
              />
              {errors.addressLine1 && (<Typography color="error">{errors.addressLine1.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Typography sx={{ fontSize: 16, fontFamily: 'kanit' }}>Country</Typography>
              <div style={{ pointerEvents: 'none' }}>
                <CountrySelect
                  defaultValue={countryDetails}
                  style={{ height: "34px", border: "0px solid #ccc", fontFamily: 'kanit',outline: 'none',boxShadow: 'none',
                    '&:focus': {
                      border: 'none',
                      outline: 'none',
                    },
                  }}
                  placeHolder="Select Country"
                />
              </div>
              {errors.country && (<Typography color="error">{errors.country.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Typography sx={{ fontSize: 16, fontFamily: 'kanit' }}>Province</Typography>
              <StateSelect
                countryid={countryid}
                onChange={(e) => { setValue("state", e?.name); setstateid(e.id) }}
                style={{
                  height: "34px", border: "0px solid #ccc", fontFamily: 'kanit', outline: 'none', boxShadow: 'none',
                  '&:focus': {
                    border: 'none',
                    outline: 'none',
                  }
                }}
                placeHolder="Select State"
              />
              {errors.state && (<Typography color="error">{errors.state.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <Typography sx={{ fontSize: 16, fontFamily: 'kanit' }}>City</Typography>
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                autoComplete="off"
                onChange={(e) => {
                  setValue("city", e?.name);
                }}
                style={{
                  height: "34px", border: "0px solid #ccc", fontFamily: 'kanit', outline: 'none', boxShadow: 'none',
                  '&:focus': {
                    border: 'none',
                    outline: 'none',
                  }
                }}
                placeHolder="Select City"
              />
            </Grid>
            <Grid item xs={12} sm={4} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Area/Society"
                {...register("area", {
                  required: "Area is required",
                })}
                value={area}
                onChange={(e) => setValue("area", e.target.value)}
              />
              {errors.area && (<Typography color="error">{errors.area.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <SelectInput
                label="LED Size"
                name="type"
                options={productSize}
                value={type}
                onChange={(e) => setValue("type", e.target.value)}
                required={true}
              />
              {errors.type && (<Typography color="error">{errors.type.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <SelectInput
                label="LED Type"
                name="size"
                options={resolution}
                value={size}
                onChange={(e) => setValue("size", e.target.value)}
                required={true}
              />
              {errors.size && (<Typography color="error">{errors.size.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Product Model"
                {...register("productModel", {
                  required: "Product Model is required",
                })}
                value={productModel}
                onChange={(e) => setValue("productModel", e.target.value)}
              />
              {errors.productModel && (<Typography color="error">{errors.productModel.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <TextInput
                label="Serial Number"
                {...register("serialNumber", {
                  required: "Serial Number is required",
                })}
                value={serialNumber}
                onChange={(e) => setValue("serialNumber", e.target.value)}
              />
              {errors.serialNumber && (<Typography color="error">{errors.serialNumber.message}</Typography>)}
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <FileUpload
                label="Upload Warranty Card"
                onChange={handleFileUpload("warrantyCard")}
              />
            </Grid>
            <Grid item xs={12} sm={6} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <FileUpload
                label="Upload Purchase Receipt"
                onChange={handleFileUpload("purchaseReceipt")}
              />
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="Gender"
                {...register("gender", { required: "Gender is required" })}
                options={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                ]}
                value={gender}
                onChange={(e) => setValue("gender", e.target.value)}
              />
              {errors.gender && (<Typography color="error">{errors.gender.message}</Typography>)}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <CheckboxGroup
                label="How did you find out about our brand?"
                options={brandOptions}
                {...register("brandSource", {
                  validate: (value) =>
                    value?.length > 0 || "Select at least one option",
                })}
                value={brandSource}
                onChange={(e) => setValue("brandSource", e.target.value)}
              />
              {errors.brandSource && (<Typography color="error">{errors.brandSource.message}</Typography>)}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="From Where Did You Buy?"
                {...register("shop", {
                  required: "Please Select One Option",
                })}
                value={shop}
                onChange={(e) =>
                  setValue("shop", e.target.value)
                }
                options={[
                  { value: "Dealer Shop", label: "Dealer Shop" },
                  { value: "Modern Trade / Large Format Stores", label: "Modern Trade / Large Format Stores" },
                  { value: "Online Store", label: "Online Store" },
                ]}
              />
              {errors.shop && (<Typography color="error">{errors.shop.message}</Typography>
              )}
            </Grid><Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <RadioGroupInput
                label="Do you wish to receive promotional materials from Skyworth?"
                {...register("promotionalMaterials", {
                  required: "Please Select Yes or No",
                })}
                value={promotionalMaterials}
                onChange={(e) =>
                  setValue("promotionalMaterials", e.target.value)
                }
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" },
                ]}
              />
              {errors.promotionalMaterials && (<Typography color="error">{errors.promotionalMaterials.message}</Typography>
              )}
            </Grid>
            <Grid item component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              <CheckboxGroup
                label="You agree to the terms and conditions shared in this form"
                {...register("termsAccepted", {
                  required: "You must accept the terms and conditions",
                })}
                options="I have reviewed all the T&C on the warranty card, and agree and accept the T&C provided"
                value={watch("termsAccepted")}
                onChange={(e) => {
                  setTermandCondition(!TermandCondition);
                  setValue("termsAccepted", e.target.value);
                }}
                singleOption={true}
              />
              {errors.termsAccepted && (<Typography color="error">{errors.termsAccepted.message}</Typography>)}
            </Grid>
            <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
              {loading ?
                <Box sx={{ textAlign: 'center' }}>
                  <CircularProgress />
                </Box> :
                <Button type="submit" onClick={handleSubmit} variant="contained" disabled={isFormComplete == undefined ? true : false || TermandCondition}
                  sx={{ background: "#1a7efb", height: 53, color: "white", marginBottom: "10px", "&:hover": { background: "#0069CB" } }} fullWidth>
                  Submit
                </Button>}
            </Grid>
          </Grid>
        </form>
      </Box>
      <WarrantyCards />
      <LeftAlignedBoxWithBackground
        bordershown={true}
        backgroundImage={BackgrondImages}
        buttonText={"View All SKYWORTH TVs"}
        onClick={handleLearnMore}
      />
    </Box>
  );
};
export default Index;
