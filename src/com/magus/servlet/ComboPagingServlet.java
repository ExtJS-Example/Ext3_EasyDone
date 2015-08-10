package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Chap12
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:50:48
 */
public class ComboPagingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public ComboPagingServlet() {
        super();
    }

    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter out = response.getWriter();
    	
    	// 起始索引
    	int start = Integer.parseInt(request.getParameter("start"));
    	// 页大小
    	int limit = Integer.parseInt(request.getParameter("limit"));
    	System.out.println(start+"--"+limit);
    	// 总记录条数, 如果是数据库则要通过count计算出来
    	int totalProperty = 17;
    	
    	String fmt = "{did: %d, dname: '%s'}";
    	StringBuffer s = new StringBuffer("{count:");
    	s.append(totalProperty).append(",data:[");
    	int end = start + limit;
    	
    	// 因为不是从数据库中查找,  所以需要多加一个判断. 送客户果实数据库查询, 下面的代码删除
    	if(end>totalProperty) {
    		end = totalProperty;
    	}
    	
    	for(int i=start; i<end; i++) {
    		s.append(String.format(fmt, i, "部门"+i));
    		if(i<end-1) {
    			s.append(",");	// 各json对象用","隔开, 最后一个不要
    		}
    	}
    	s.append("]}");
    	System.out.println(s.toString());
    	out.println(s.toString());
    	out.flush();
    	out.close();
    }

}
