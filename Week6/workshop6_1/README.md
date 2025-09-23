# Reuseable Card Component
## Components
- Button
- ProductCard

### Button
- รับ Props
 - variant (กำหนดสี)
 - size (ขนาด)
 - children (รับข้อความ
 
### Product Card
- รับ Props
 - imageUrl
 - title
 - description
 - price
 - onAddToCard (function)

``` javascript
<Button variant="primary" size="md" onClick={onAddToCart}>
                        Add to cart
</Button>
```
- เรียกใช้ component Button  โดยกำหนดว่าเป็น variant = primary (สีน้ำเงิน) ขนาดกลาง
    - เมื่อ click เรียกใช้ function onAddToCart