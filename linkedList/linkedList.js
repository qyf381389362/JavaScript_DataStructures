// 单向链表的实现, 通过构造函数实现的。以后考虑用class实现一版
function LinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };
    
    let length = 0;
    let head = null;

    // 向链表中增加元素
    this.append = function(element) {
        let node = new Node(element);
        let current;

        if (head === null) {
            head = node;
        } else {
            current = head;
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            // 找到最后一项，将其next值赋为node，建立连接
            current.next = node;
        }
        length++;
    };

    // 在任意位置插入元素
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            
            if (position === 0) { // 在第一个位置添加
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    // 删除指定值
    this.remove = function(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // 删除列表指定位置的值
    this.removeAt = function(position) {
        // 检查是否越界
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.indexOf = function(element) {
        let current = head;
        let index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    // 判断链表是否为空
    this.isEmpty = function() {
        return length === 0;
    };

    // 返回链表长度
    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    };

    this.toString = function() {
        let current = head;
        let string = '';

        while (current) {
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string;
    };
    this.print = function() {};
}
