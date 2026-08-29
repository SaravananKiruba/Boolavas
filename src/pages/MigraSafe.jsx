import ProductPageLayout from '../components/products/ProductPageLayout'
import { getProduct } from '../data/products'

const MigraSafe = () => <ProductPageLayout product={getProduct('migrasafe')} />

export default MigraSafe
