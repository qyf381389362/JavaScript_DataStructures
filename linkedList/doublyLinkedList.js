// 双向链表的实现，通过构造函数实现。以后使用class实现一版
function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    // 在任意位置插入新元素
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;

            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            length++;
            return true;
        } else {
            return false;
        }
    };

    // 从任意位置移除元素
    this.removeAt = function(position) {
        // 检查是否越界
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;

                //如果只有有第一项，更新tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) { // 最后一项
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }

            length--;
            return current.element;
        } else {
            return null;
        }
    };

    // 判断链表是否为空
    this.isEmpty = function() {
        return length === 0;
    };

    // 返回链表长度
    this.size = function() {
        return length;
    };
}
