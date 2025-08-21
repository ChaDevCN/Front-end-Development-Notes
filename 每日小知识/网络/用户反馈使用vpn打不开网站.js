/**
 *  用户反馈使用VPN后打开不网站 （https://www.gtpeptidebio.com/）
 * 
 *  1. 访问链
 *    -  顶级域名指向nginx。nginx重定向（301）=> www
 *    -  www指向azure cdn 终结点。azure cdn 终结点指向azure blob storage
 *  问题分析：
 *      1. VPN的机场不同，导致访问front door的网络差
 *      2. dns解析可能返回IPV4或IPv6地址，导致部分节点不通。
 *      3. 部分用户的网络环境下，可能会因为dns解析返回的IP地址被拦截，导致访问失败。
 * 解决方案：
 *      1. 临时解决方案：更换VPN节点、关闭VPN
 *      2. 长期解决方案：加国内cdn
 */