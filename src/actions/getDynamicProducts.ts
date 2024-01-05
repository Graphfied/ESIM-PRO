"use server";
export interface DynamicProductsOptions {
  region?: string;
  country?: string;
  productId?: string;
  category?: string;
}

export const getDynamicProducts = async (
  options: DynamicProductsOptions = {}
) => {
  try {
    let url = "https://api.mobimatter.com/mobimatter/api/v2/products";

    const { region, country, productId, category } = options;
    // console.log("🚀 ~ file: getDynamicProducts.ts:15 ~ getDynamicProducts ~ country:", country)

    if (region) {
      url += `?region=${region}`;
    } else if (country) {
      url += `?country=${country}`;
    } else if (country && category) {
      url += `?country=${country}&category=${category}`;
    } else if (productId) {
      url += `?productId=${productId}`;
    } else if (category) {
      url += `?category=${category}`;
    }

    // if (region && country && productId ) {
    //     url += `?region=${region}&country=${country}&productId=${productId}`;
    // } else if (region) {
    //     url += `?region=${region}`;
    // } else if (country) {
    //     url += `?country=${country}`;
    // } else if (productId) {
    //     url += `?productId=${productId}`;
    // } else if (category) {
    //     url += `?category=${category}`;
    // }

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accpet: "text/plain",
        "api-key": "104883b5fe984321a2ba68470504b267",
        MerchantId: "6d58aede-871a-4556-83f0-9b0e0c31602f",
      },
    });
    const data = await res.json();
    return data.result;
  } catch (error) {
    throw new Error("Unable get products by specific region and country code");
  }
};