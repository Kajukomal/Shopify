import Layout from "../components/Layout/Layout";
import React from "react";
import useCategory from "../hooks/useCategory.js";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All-Categories"}>
      <div className="container"  style={{ marginTop: "100px" }}>
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
              <Link className="btn cat-btn" to={`/category/${c.slug}`}>
                {c.name}
                </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
