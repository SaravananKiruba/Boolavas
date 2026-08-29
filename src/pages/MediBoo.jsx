import ProductPageLayout from '../components/products/ProductPageLayout'
import { getProduct } from '../data/products'

const MediBoo = () => <ProductPageLayout product={getProduct('mediboo')} />

export default MediBoo
