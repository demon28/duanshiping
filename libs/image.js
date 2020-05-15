function ImageWrapper() {

}

var image = new ImageWrapper();

/**
 * 向系统申请屏幕截图权限，返回是否请求成功。
 * <p>
 * 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
 * </p>
 * <p>
 * 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
 * </p>
 * 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
 * <p>
 * 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。
 * </P>
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @return 布尔型 true 代表成功 false代表失败
 */
ImageWrapper.prototype.requestScreenCapture = function () {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.requestScreenCapture();
};


/**
 * 释放截屏请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 */
ImageWrapper.prototype.releaseScreenCapture = function () {
    if (imageWrapper == null) {
        return;
    }
    imageWrapper.releaseScreenCapture();
};
/**
 * 向系统申请屏幕截图权限，返回是否请求成功。
 * <p>
 * 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
 * <p>
 * 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
 * <p>
 * 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
 * <p>
 * 如果不指定landscape值，则截图方向由当前设备屏幕方向决定，因此务必注意执行该函数时的屏幕方向。
 * <p>
 * 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param orientation 屏幕方向，1 代表竖屏  2 代表横屏
 * @return 布尔型 true 代表成功 false代表失败
 */
ImageWrapper.prototype.requestScreenCaptureOri = function (orientation) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.requestScreenCaptureOri(orientation);
};

/**
 * 截取当前屏幕并返回一个Image对象。
 * <p>
 * 没有截图权限时执行该函数会返回null
 * <p>
 * 两次调用可能返回相同的Image对象。这是因为设备截图的更新需要一定的时间，短时间内（一般来说是16ms）连续调用则会返回同一张截图。
 * <p>
 * 截图需要转换为Bitmap格式，从而该函数执行需要一定的时间(0~20ms)。
 * <p>
 * 另外在requestScreenCapture()执行成功后需要一定时间后才有截图可用，因此如果立即调用captureScreen()，会等待一定时间后(一般为几百ms)才返回截图。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * <Br/>
 * 如果区域空或则有负数的，就会是全屏
 * @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 *  @param w 截图的宽度，从X坐标算起
 *   @param h 截图的高度，从Y坐标算起
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.captureScreen = function (retryNumber, x, y, w, h) {
    if (imageWrapper == null) {
        return;
    }
    var uuid = imageWrapper.captureScreen(retryNumber, x, y, w, h);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 截取当前屏幕并以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *<Br/>
 * 如果区域空或则有负数的，就会是全屏
 *  @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 *  @param w 截图的宽度，从X坐标算起
 *   @param h 截图的高度，从Y坐标算起
 *   @param path 截图保存路径
 * @return 布尔型 true 截图成功 false 代表不成功
 */
ImageWrapper.prototype.captureScreenToFile = function (retryNumber, x, y, w, h, path) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.captureScreenToFile(retryNumber, x, y, w, h, path);
};

/**
 * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
 * 如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.readImage = function (path) {
    if (imageWrapper == null) {
        return;
    }
    var uuid = imageWrapper.readImage(path);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 读取在路径path的图片文件并返回一个{@link Bitmap}对象。如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return Bitmap android的bitmap对象或者null
 */
ImageWrapper.prototype.readBitmap = function (path) {
    if (imageWrapper == null) {
        return;
    }
    return imageWrapper.readBitmap(path);
};

/**
 * 返回图片image在点(x, y)处的像素的ARGB值。
 * <p>
 * 该值的格式为0xAARRGGBB，是一个"32位整数"
 * <p>
 * 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
 *
 * @param image 图片
 * @param x     要获取的像素的横坐标。
 * @param y     要获取的像素的纵坐标。
 * @return 整型
 */
ImageWrapper.prototype.pixelInImage = function (image, x, y) {
    if (imageWrapper == null || image == null) {
        return;
    }
    return imageWrapper.pixelInImage(image.uuid, x, y);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image    大图片
 * @param template 小图片（模板）
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImage = function (image, template, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var res = imageWrapper.findImage(image.uuid, template.uuid, limit);
    return this.toRectList(res);
};

/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template 小图片（模板）
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageCurrentScreen = function (template, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageCurrentScreen(template.uuid, limit);
    return this.toRectList(res);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     大图片
 * @param template  小图片（模板）
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageThreshold = function (image, template, threshold, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageThreshold(image.uuid, template.uuid, threshold, limit);
    return this.toRectList(res);
};


/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template  小图片（模板）
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageThresholdCurrentScreen = function (template, threshold, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageThresholdCurrentScreen(template.uuid, threshold, limit);
    return this.toRectList(res);
};


/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template  小图片（模板）
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect      找图区域。参见findColor函数关于 rect 的说明。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion1CurrentScreen = function (template, threshold, rect, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findImageRegion1CurrentScreen(template.uuid, threshold, drect, limit);
    return this.toRectList(res);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     大图片
 * @param template  小图片（模板）
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect      找图区域。参见findColor函数关于 rect 的说明。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion1 = function (image, template, threshold, rect, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findImageRegion1(image.uuid, template.uuid, threshold, drect, limit);
    return this.toRectList(res);
};

/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param w         找图区域 w 宽度
 * @param h         找图区域 h 高度
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion2 = function (image, template, x, y, w, h, threshold, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageRegion2(image.uuid, template.uuid, x, y, w, h, threshold, limit);
    return this.toRectList(res);
};


/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param w         找图区域 w 宽度
 * @param h         找图区域 h 高度
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion2CurrentScreen = function (template, x, y, w, h, threshold, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var res = imageWrapper.findImageRegion2CurrentScreen(template.uuid, x, y, w, h, threshold, limit);
    return this.toRectList(res);
};


/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明。
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion3CurrentScreen = function (template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findImageRegion3CurrentScreen(template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    return this.toRectList(res);
};
/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image         大图片
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明。
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageRegion3 = function (image, template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findImageRegion3(image.uuid, template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    return this.toRectList(res);
};

/**
 * OpenCV模板匹配封装
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image         大图片
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplate = function (image, template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || image == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplate(image.uuid, template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * OpenCV模板匹配封装，在当前屏幕截图中进行匹配
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplateCurrentScreen = function (template, weakThreshold, threshold, rect, maxLevel, limit) {
    if (imageWrapper == null || template == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplateCurrentScreen(template.uuid, weakThreshold, threshold, drect, maxLevel, limit);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * 在图片img指定区域中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param color     要寻找的颜色
 * @return Point 坐标点或者null
 */
ImageWrapper.prototype.findColorEquals = function (image, color) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var res = imageWrapper.findColorEquals(image.uuid, color);
    return Point.jsonToObject(res);
};

/**
 * 在图片img指定区域中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param color     要寻找的颜色
 * @param rect      找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                  right,bottom 表示找色区域的宽高。如果只有 rect 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定region选项，则找色区域为整张图片。
 * @return Point
 */
ImageWrapper.prototype.findColorEqualsRegion = function (image, color, rect) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findColorEqualsRegion(image.uuid, color, drect);
    return Point.jsonToObject(res);
};
/**
 * 在图片中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @return Point
 */
ImageWrapper.prototype.findColor = function (image, color, threshold) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var res = imageWrapper.findColor(image.uuid, color, threshold);
    return Point.jsonToObject(res);
};

/**
 * 在图片img指定区域中找到颜色和color完全相等的某个点，并返回该点的左边；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect      找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                  right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @return Point
 */
ImageWrapper.prototype.findColorRegion = function (image, color, threshold, rect) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findColorRegion(image.uuid, color, threshold, drect);
    return Point.jsonToObject(res);
};
/**
 * 在图片img指定区域中找到颜色和color完全相等的所有点，并返回集合，没有就返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image     图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect      找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                  right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findAllPointsForColor = function (image, color, threshold, rect) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findAllPointsForColor(image.uuid, color, threshold, drect);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Point(d[i]));
    }
    return x;
};

/**
 * 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image      要找色的图片
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect       找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                   right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @param points     数组，表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findAllMultiColors = function (image, firstColor, threshold, rect, points) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var ps = JSON.stringify(points);
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findAllMultiColors(image.uuid, firstColor, threshold, drect, ps);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Point(d[i]));
    }
    return x;
};

/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect       找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                   right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @param points     数组， 表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findAllMultiColorsCurrentScreen = function (firstColor, threshold, rect, points) {
    if (imageWrapper == null) {
        return;
    }
    var ps = JSON.stringify(points);
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findAllMultiColorsCurrentScreen(firstColor, threshold, drect, ps);
    if (res == null) {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Point(d[i]));
    }
    return x;
};


/**
 * 多点找色，返回第一个找到的点，类似于按键精灵的多点找色，其过程如下：
 * <p>
 * 在图片img中找到颜色firstColor的位置(x0, y0)
 * <p>
 * 对于数组colors的每个元素[x, y, color]，检查图片img在位置(x + x0, y + y0)上的像素是否是颜色color，是的话返回(x0, y0)，否则继续寻找firstColor的位置，重新执行第1步
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image      要找色的图片
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect       找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                   right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @param points     表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
 * @return Point
 */
ImageWrapper.prototype.findMultiColors = function (image, firstColor, threshold, rect, points) {
    if (imageWrapper == null || image == null) {
        return;
    }
    var ps = JSON.stringify(points);
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findMultiColors(image.uuid, firstColor, threshold, drect, ps);
    return Point.jsonToObject(res);
};


/**
 * 多点找色,返回第一个找到的点，在当前屏幕中，类似于按键精灵的多点找色，其过程如下：
 * <p>
 * 在图片img中找到颜色firstColor的位置(x0, y0)
 * <p>
 * 对于数组colors的每个元素[x, y, color]，检查图片img在位置(x + x0, y + y0)上的像素是否是颜色color，是的话返回(x0, y0)，否则继续寻找firstColor的位置，重新执行第1步
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度的临界值，范围为0~255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
 * @param rect       找色区域。是一个两个或四个元素的数组。(left,top)表示找色区域的左上角；
 *                   right,bottom 表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(left,top)到屏幕右下角。如果不指定 rect 选项，则找色区域为整张图片。
 * @param points     表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
 * @return Point
 */
ImageWrapper.prototype.findMultiColorsCurrentScreen = function (firstColor, threshold, rect, points) {
    if (imageWrapper == null) {
        return;
    }
    var ps = JSON.stringify(points);
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.findMultiColorsCurrentScreen(firstColor, threshold, drect, ps);
    return Point.jsonToObject(res);
};


/**
 * 取得宽度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getWidth = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getWidth(img.uuid);
};

/**
 * 取得高度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getHeight = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getHeight(img.uuid);
};

/**
 * 保存到文件中
 * @param img 图片对象
 * @param path 路径
 * @return bool true代表成功，false 代表失败
 */
ImageWrapper.prototype.saveTo = function (img, path) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.saveTo(img.uuid, path);
};
/**
 * 转成base64的字符串
 * @param img 图片对象
 * @return string
 */
ImageWrapper.prototype.toBase64 = function (img) {
    if (img == null) {
        return null;
    }
    return javaString2string(imageWrapper.toBase64(img.uuid));
};
/**
 * 剪切图片
 * @param img 图片对象
 * @param x x起始坐标
 * @param y y起始坐标
 * @param w 宽度
 * @param h 高度
 * @return AutoImage 对象或者null
 */
ImageWrapper.prototype.clip = function (img, x, y, w, h) {
    if (img == null) {
        return null;
    }
    var xd = imageWrapper.clip(img.uuid, x, y, w, h);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};
/**
 * 取得图片的某个点的颜色值
 * @param img 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 */
ImageWrapper.prototype.pixel = function (img, x, y) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.pixel(img.uuid, x, y);
};

/**
 * 是否被回收了
 * @param img 图片对象
 * @return bool true代表已经被回收了
 */
ImageWrapper.prototype.isRecycled = function (img) {
    if (img == null) {
        return false;
    }
    return imageWrapper.isRecycled(img.uuid);
};

/**
 * 回收图片
 * @param img 图片对象
 * @return {*}
 */
ImageWrapper.prototype.recycle = function (img) {
    if (img == null) {
        return false;
    }
    return imageWrapper.recycle(img.uuid);
};


ImageWrapper.prototype.toRectList = function (res) {
    if (res == null) {
        return null;
    }
    var ps = JSON.parse(res);
    if (ps == null) {
        return null;
    }
    var d = [];
    for (var i = 0; i < ps.length; i++) {
        d.push(new Rect(ps[i]));
    }
    return d;
};