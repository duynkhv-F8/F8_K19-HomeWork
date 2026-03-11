Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?
- Selector inline style có độ ưu tiên cao nhất trong CSS.
Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?
- Nếu một phần tử HTML có cả h1, .title, và #main cùng set color thì selector #main sẽ thắng vì xét theo độ ưu tiên id > class > tag.
Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?
- Nếu thêm style="color: pink" trực tiếp vào phần tử ở Câu 2 thì phần tử đó sẽ có màu hồng vì inline style có độ ưu tiên cao nhất.
Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?
- theme.css có thể override base.css vì file này được load sau base.css. Khi các selector có cùng độ ưu tiên thì CSS được khai báo sau sẽ được áp dụng.
Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.
- Có 2 phần tử đều dùng class .title nhưng có 1 phần tử trong phần tử đó chứa id nên phần tử đó sẽ lấy màu của id vì id độ ưu tiên cao hơn class, phần tử còn lại vẫn lấy màu title, nên 2 phần tử này sẽ có màu khác nhau.
Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.
- phần tử <h1 class="title" id="special" style="color: chartreuse">DASHBOARD</h1> ở file dashboard có độ phức tạp nhất.
- Phần tử h1 này có: tag(h1) + class(.title) + id(#special) + inline style
  Selector thắng: inline style vi inline style có độ ưu tiến cao nhất
  Màu hiển thị: chartreuse.