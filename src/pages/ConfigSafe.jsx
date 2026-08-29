import ProductPageLayout from '../components/products/ProductPageLayout'
import { getProduct } from '../data/products'

const ConfigSafe = () => <ProductPageLayout product={getProduct('configsafe')} />

export default ConfigSafe
