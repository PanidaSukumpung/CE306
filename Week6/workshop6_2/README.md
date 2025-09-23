# Nav Bar
## Components
- Nav

### Navbar
  - justify-between ให้โลโก้ชิดซ้าย และ ลิงก์ชิดขวา
  - hamburgur menu (Button)
    - ถูกซ่อนไว้หากขนาดหน้าจอมากกว่า medium(md) และเมื่อขนาดหน้าจอเล็กจะขึ้น icon menu-hamburger
      - ใช้ useState กำหนด isMenuOpen default = false เมื่อคลิก button จะsetให้เป็น true
      - เมื่อเป็น true menu แบบ dropdown จะโชว์ขึ้นแบบมีtransition และเปลี่ยน icon เป็นกากบาท
      - hover จะเปลี่ยนiconเป็นสีฟ้า