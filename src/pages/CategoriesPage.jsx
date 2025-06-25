import Header from "@/components/Layout/Header"
import CategorieAddForm from "@/components/CategorieAddForm"
import CategorieSection from "@/components/CategorieSection"

const CategoriesPages = () => {
  return (
    <div className="content">
      <Header/>
      <main className="categories-content">
        <CategorieAddForm />
        <CategorieSection />
      </main>
    </div>
  );
};

export default CategoriesPages;